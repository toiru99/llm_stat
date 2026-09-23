---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 4.35
output_speed_tps: 83.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 62.5, z: 0.98, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.2, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 74.2, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 51.9, z: 0.54, r: 58.1, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.32, r: 54.7, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.24, r: 46.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 83.0 t/s · TTFT 0.99s · 922k ctx` · 가성비 5.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.98 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 58.1 | +0.54 | 실측 | [[gdpval]] 23.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 54.7 | +0.32 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.4 | -0.24 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
