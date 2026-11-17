---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 78.41983567614199
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.26, r: 69.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.8, z: 0.96, r: 64.4, estimated: false }  # 추론
  coding: { s: 56.3, z: 0.56, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 74.6, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.7, z: 0.58, r: 58.8, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 92.0, z: 1.6, r: 74.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 78.41983567614199 t/s · TTFT 59.63264098460979s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.0 | +1.26 | 실측 | [[gpqa-diamond]] 89.8989898989899%×0.4, [[humanitys-last-exam]] 35.7275254865616%×0.3 |
| 추론 | 64.4 | +0.96 | 실측 | [[critpt]] 8.66938775510204%×1.0, [[gpqa-diamond]] 89.8989898989899%×1.0, [[humanitys-last-exam]] 35.7275254865616%×1.0 |
| 코딩 | 58.5 | +0.56 | 실측 | [[terminal-bench]] 37.121212121212096%×0.5 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[tau2-bench]] 92.1052631578947%×1.0, [[terminal-bench]] 37.121212121212096%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.8 | +0.58 | 실측 | [[mmmu-pro]] 76.3005780346821%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 82.3333333333333%×1.0 |
| 지시 따르기 | 74.0 | +1.6 | 실측 | [[ifbench]] 77.61904761904759%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
