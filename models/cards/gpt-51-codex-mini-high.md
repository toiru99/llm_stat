---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 0.2675
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.6, z: 0.14, r: 52.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.0, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.52, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 56.8, z: 0.73, r: 60.9, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.01, r: 65.2, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.18, r: 52.7, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.75, r: 61.2, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.05, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 74.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.1 | +0.14 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 57.7 | +0.52 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 60.9 | +0.73 | 실측 | [[tau2-bench]] 63.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 65.2 | +1.01 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 52.7 | +0.18 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.2 | +0.75 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
