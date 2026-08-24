---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 4.35
output_speed_tps: 80.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.2, z: 1.08, r: 66.2, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.02, r: 49.8, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 54.9, z: 0.68, r: 60.3, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.58, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.26, r: 46.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 80.0 t/s · TTFT 0.87s · 922k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.2 | +1.08 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.8 | -0.02 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 60.3 | +0.68 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 58.6 | +0.58 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 46.0 | -0.26 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
