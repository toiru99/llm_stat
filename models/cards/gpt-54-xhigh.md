---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 74.311648336614
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 73.0, z: 1.86, r: 78.0, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.62, r: 74.3, estimated: false }  # 코딩
  agentic: { s: 81.3, z: 1.27, r: 69.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.73, r: 60.9, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 86.8, z: 1.39, r: 70.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 74.311648336614 t/s · TTFT 122.17621503002225s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.020202020202%×0.4, [[humanitys-last-exam]] 43.7442075996293%×0.3 |
| 추론 | 78.0 | +1.86 | 실측 | [[critpt]] 23.42857143%×1.0, [[gpqa-diamond]] 92.020202020202%×1.0, [[humanitys-last-exam]] 43.7442075996293%×1.0 |
| 코딩 | 74.3 | +1.62 | 실측 | [[terminal-bench]] 57.5757575757576%×0.5 |
| 에이전트 | 69.1 | +1.27 | 실측 | [[gdpval]] 1255.65%×1.0, [[tau2-bench]] 87.1345029239766%×1.0, [[tau3-banking]] 39.587628865979404%×1.0, [[terminal-bench]] 57.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.9 | +0.73 | 실측 | [[mmmu-pro]] 78.4393063583815%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 실측 | [[ifbench]] 73.9455782312925%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
