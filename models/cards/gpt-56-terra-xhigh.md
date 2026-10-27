---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 1.74
output_speed_tps: 128.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.6, z: 1.45, r: 71.8, estimated: false }  # 전문 지식
  reasoning: { s: 81.4, z: 2.0, r: 80.0, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.48, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.47, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 128.0 t/s · TTFT 29.72s · 1M ctx` · 가성비 21.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.8 | +1.45 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 80.0 | +2.0 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 72.3 | +1.48 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 72.1 | +1.47 | 실측 | [[gdpval]] 1456.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 61.6 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
