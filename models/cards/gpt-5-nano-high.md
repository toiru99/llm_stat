---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 172.9286036542006
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 27.6, z: -0.59, r: 41.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.2, z: -0.46, r: 43.0, estimated: false }  # 멀티모달
  long_context: { s: 50.8, z: -0.08, r: 48.9, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 1.01, r: 65.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 172.9286036542006 t/s · TTFT 49.50883700199997s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 67.5757575757576%×0.4, [[humanitys-last-exam]] 9.49953660797034%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.5757575757576%×1.0, [[humanitys-last-exam]] 9.49953660797034%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.1212121212121%×0.5 |
| 에이전트 | 41.2 | -0.59 | 실측 | [[tau2-bench]] 36.5497076023392%×1.0, [[terminal-bench]] 12.1212121212121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.0 | -0.46 | 실측 | [[mmmu-pro]] 60.982658959537595%×1.0 |
| 긴문맥 | 48.9 | -0.08 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 실측 | [[ifbench]] 67.5510204081633%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
