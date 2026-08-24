---
type: Model
title: GPT-5.1 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 2.125
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.1, z: 1.12, r: 66.8, estimated: false }  # 전문 지식
  reasoning: { s: 51.5, z: 0.77, r: 61.5, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 68.4, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 24.4, z: -0.16, r: 47.7, estimated: false }  # 신뢰성
  multimodal: { s: 81.4, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.11, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-5.1 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 16.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.8 | +1.12 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 61.5 | +0.77 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[tau2-bench]] 83.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 47.7 | -0.16 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
