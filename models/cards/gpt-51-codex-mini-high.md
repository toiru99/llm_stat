---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.42
output_speed_tps: 213.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.9, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.26, r: 54.0, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.78, r: 61.7, estimated: false }  # 코딩
  agentic: { s: 56.8, z: 0.8, r: 62.1, estimated: false }  # 에이전트
  trust: { s: 56.5, z: 1.34, r: 70.1, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.33, r: 54.9, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.02, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.42/1M · 213.0 t/s · TTFT 4.12s · 400k ctx` · 가성비 73.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 54.0 | +0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 61.7 | +0.78 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 62.1 | +0.8 | 실측 | [[tau2-bench]] 63.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 70.1 | +1.34 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 54.9 | +0.33 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 65.4 | +1.02 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
