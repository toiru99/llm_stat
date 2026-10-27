---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 1.8725
output_speed_tps: 138.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.2, z: 1.16, r: 67.4, estimated: false }  # 전문 지식
  reasoning: { s: 59.5, z: 1.01, r: 65.1, estimated: false }  # 추론
  coding: { s: 56.1, z: 0.61, r: 59.2, estimated: false }  # 코딩
  agentic: { s: 56.1, z: 0.73, r: 61.0, estimated: false }  # 에이전트
  trust: { s: 25.8, z: -0.07, r: 49.0, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.64, r: 74.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 138.0 t/s · TTFT 116.43s · 400k ctx` · 가성비 15.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 65.1 | +1.01 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 59.2 | +0.61 | 실측 | [[terminal-bench]] 37.0%×0.5 |
| 에이전트 | 61.0 | +0.73 | 실측 | [[terminal-bench]] 37.0%×1.0 |
| 신뢰성 | 49.0 | -0.07 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 74.7 | +1.64 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
