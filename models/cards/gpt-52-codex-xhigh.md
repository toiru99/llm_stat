---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.87
output_speed_tps: 174.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.5, z: 1.54, r: 73.1, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 1.47, r: 72.0, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.41, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.48, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.14, r: 52.0, estimated: false }  # 신뢰성
  multimodal: { s: 88.4, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.52, r: 72.8, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.68, r: 75.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.87/1M · 174.0 t/s · TTFT 52.26s · 400k ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 72.0 | +1.47 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.2 | +1.41 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 37.0%×0.5 |
| 에이전트 | 72.3 | +1.48 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 37.0%×1.0 |
| 신뢰성 | 52.0 | +0.14 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 72.8 | +1.52 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 75.2 | +1.68 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
