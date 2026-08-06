---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.8725
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.5, z: 1.46, r: 71.9, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.34, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.55, r: 73.2, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.05, r: 50.8, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.49, r: 72.3, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.64, r: 74.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.9 | +1.46 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 70.2 | +1.34 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 37.0%×0.5 |
| 에이전트 | 73.2 | +1.55 | 실측 | [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 37.0%×1.0 |
| 신뢰성 | 50.8 | +0.05 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 72.3 | +1.49 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 74.5 | +1.64 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
