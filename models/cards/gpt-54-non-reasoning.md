---
type: Model
title: GPT-5.4 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 44.2543797140191
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.0, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 46.9, z: 0.07, r: 51.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.8, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.36, r: 55.4, estimated: false }  # 긴문맥
  instruction: { s: 51.0, z: -0.12, r: 48.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.4 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 44.2543797140191 t/s · TTFT 1.79057028117214s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[gpqa-diamond]] 74.8484848484848%×0.4, [[humanitys-last-exam]] 11.2604263206673%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 74.8484848484848%×1.0, [[humanitys-last-exam]] 11.2604263206673%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[terminal-bench]] 37.878787878787904%×0.5 |
| 에이전트 | 51.0 | +0.07 | 실측 | [[tau2-bench]] 35.964912280701796%×1.0, [[terminal-bench]] 37.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 70.5780346820809%×1.0 |
| 긴문맥 | 55.4 | +0.36 | 실측 | [[aa-lcr]] 58.3333333333333%×1.0 |
| 지시 따르기 | 48.2 | -0.12 | 실측 | [[ifbench]] 48.4353741496599%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
