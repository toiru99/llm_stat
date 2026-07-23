---
type: Model
title: DeepSeek R1 Distill Llama 70B
creator: DeepSeek
license: Open
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: 30.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 27.7, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 15.1, z: -0.97, r: 35.4, estimated: false }  # 추론
  coding: { s: 35.5, z: -0.46, r: 43.1, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: 19.5, z: -0.37, r: 44.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.5, z: -1.04, r: 34.5, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.25, r: 31.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Llama 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# DeepSeek R1 Distill Llama 70B

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $1.05 · 혼합 $None/1M · 30.0 t/s · TTFT 0.77s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 35.4 | -0.97 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 43.1 | -0.46 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 44.5 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.5 | -1.04 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 31.2 | -1.25 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
