---
type: Model
title: GPT-4.1 mini
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 0.31
output_speed_tps: 82.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.1, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.0, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 18.8, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 61.1, z: -0.45, r: 43.3, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: 0.01, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 40.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1 mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-4.1 mini

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.31/1M · 82.0 t/s · TTFT 0.94s · 1M ctx` · 가성비 29.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 53.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 43.3 | -0.45 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 50.2 | +0.01 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 40.0 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
