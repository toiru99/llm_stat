---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 4.35
output_speed_tps: 70.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 62.9, z: 1.1, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 75.3, z: 1.19, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 54.6, z: 0.67, r: 60.0, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.92, r: 36.2, estimated: false }  # 신뢰성
  multimodal: { s: 78.9, z: 0.41, r: 56.2, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 70.0 t/s · TTFT 0.95s · 922k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.1 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.0 | +0.0 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 67.8 | +1.19 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 60.0 | +0.67 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 56.2 | +0.41 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
