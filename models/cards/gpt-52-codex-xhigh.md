---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.8725
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.33, r: 70.0, estimated: false }  # 전문 지식
  reasoning: { s: 60.5, z: 1.23, r: 68.4, estimated: false }  # 추론
  coding: { s: 56.1, z: 0.83, r: 62.5, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.42, r: 71.3, estimated: false }  # 에이전트
  trust: { s: 25.8, z: 0.06, r: 50.9, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.68, r: 75.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 17.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.0 | +1.33 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 68.4 | +1.23 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 62.5 | +0.83 | 실측 | [[terminal-bench]] 37.0%×0.5 |
| 에이전트 | 71.3 | +1.42 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 37.0%×1.0 |
| 신뢰성 | 50.9 | +0.06 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 75.2 | +1.68 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
