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
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 24.8, z: -0.76, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 13.6, z: -1.05, r: 34.2, estimated: false }  # 추론
  coding: { s: 21.6, z: -1.07, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 0.8, z: -1.39, r: 29.1, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.67, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.76, r: 38.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Llama 3 70B

Meta · Open · Medium(70B) · 컨텍스트 8k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.65 · 출력 $2.75 · 혼합 $0.86/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 3.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.76 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.2 | -1.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 29.1 | -1.39 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 38.6 | -0.76 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
