---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.023
output_speed_tps: 142.0
context_window: 128000
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 13.1, z: -1.33, r: 30.1, estimated: false }  # 전문 지식
  reasoning: { s: 8.8, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 14.9, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 5.9, z: -1.2, r: 32.0, estimated: false }  # 에이전트
  trust: { s: 64.0, z: 1.73, r: 76.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.7, z: -0.84, r: 37.4, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.22, r: 31.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Small(8B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.02 · 출력 $0.05 · 혼합 $0.023/1M · 142.0 t/s · TTFT 0.95s · 128k ctx` · 가성비 304.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.1 | -1.33 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[scicode]] 13.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 32.0 | -1.2 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 76.0 | +1.73 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.4 | -0.84 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 31.6 | -1.22 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
