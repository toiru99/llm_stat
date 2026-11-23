---
type: Model
title: GPT-5 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 116.448966509902
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.5, z: 0.83, r: 62.5, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 0.96, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.1, z: 0.39, r: 55.9, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 87.1, z: 1.39, r: 70.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-5 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 116.448966509902 t/s · TTFT 7.33685176639167s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.5 | +0.83 | 실측 | [[gpqa-diamond]] 83.7373737373737%×0.4, [[humanitys-last-exam]] 27.8498609823911%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 5.14285714285714%×1.0, [[gpqa-diamond]] 83.7373737373737%×1.0, [[humanitys-last-exam]] 27.8498609823911%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[terminal-bench]] 37.878787878787904%×0.5 |
| 에이전트 | 64.3 | +0.96 | 실측 | [[tau2-bench]] 86.8421052631579%×1.0, [[terminal-bench]] 37.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.9 | +0.39 | 실측 | [[mmmu-pro]] 73.81502890173411%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 71.6666666666667%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 실측 | [[ifbench]] 74.1496598639456%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
