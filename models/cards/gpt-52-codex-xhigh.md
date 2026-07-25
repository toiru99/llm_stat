---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 172.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.5, z: 1.47, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 1.37, r: 70.6, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.38, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.48, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.08, r: 51.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.75, r: 61.3, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.5, r: 72.5, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.65, r: 74.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $None/1M · 172.0 t/s · TTFT 47.86s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.47 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 70.6 | +1.37 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 70.6 | +1.38 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 37.0%×0.5 |
| 에이전트 | 72.1 | +1.48 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 37.0%×1.0 |
| 신뢰성 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 61.3 | +0.75 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 72.5 | +1.5 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 74.7 | +1.65 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
