---
type: Model
title: Llama 3.1 70B
creator: Meta
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: 55.0
context_window: 128000
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 27.7, z: -0.64, r: 40.4, estimated: false }  # 전문 지식
  reasoning: { s: 14.9, z: -0.99, r: 35.2, estimated: false }  # 추론
  coding: { s: 31.5, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: 27.6, z: -0.02, r: 49.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.23, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.91, r: 36.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Llama 3.1 70B

Meta · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.56 · 출력 $0.56 · 혼합 $None/1M · 55.0 t/s · TTFT 1.36s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.4 | -0.64 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.2 | -0.99 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 49.7 | -0.02 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.5 | -1.23 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 36.3 | -0.91 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
