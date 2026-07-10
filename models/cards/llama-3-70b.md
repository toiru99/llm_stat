---
type: Model
title: Llama 3 70B
creator: Meta
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.86
output_speed_tps: None
context_window: 8189
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.5, z: -0.72, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.0, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 21.6, z: -1.03, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 0.8, z: -1.37, r: 29.4, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.64, r: 40.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.6, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.7, r: 39.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Llama 3 70B

Meta · Open · Unknown · 컨텍스트 8k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.65 · 출력 $2.75 · 혼합 $0.86/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 3.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.72 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.5 | -1.03 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 29.4 | -1.37 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 40.4 | -0.64 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.6 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 39.5 | -0.7 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
