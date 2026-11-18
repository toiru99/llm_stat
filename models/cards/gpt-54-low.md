---
type: Model
title: GPT-5.4 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 63.6249834938358
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.3, z: 0.72, r: 60.9, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 70.4, z: 0.88, r: 63.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.68, r: 60.2, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.98, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 75.5, z: 0.91, r: 63.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5.4 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 63.6249834938358 t/s · TTFT 3.2567324545714524s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[gpqa-diamond]] 87.0707070707071%×0.4, [[humanitys-last-exam]] 30.8155699721965%×0.3 |
| 추론 | 60.9 | +0.72 | 실측 | [[critpt]] 7.428571428571431%×1.0, [[gpqa-diamond]] 87.0707070707071%×1.0, [[humanitys-last-exam]] 30.8155699721965%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[terminal-bench]] 43.1818181818182%×0.5 |
| 에이전트 | 63.2 | +0.88 | 실측 | [[tau2-bench]] 74.56140350877189%×1.0, [[terminal-bench]] 43.1818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.2 | +0.68 | 실측 | [[mmmu-pro]] 77.9768786127168%×1.0 |
| 긴문맥 | 64.6 | +0.98 | 실측 | [[aa-lcr]] 76.6666666666667%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 실측 | [[ifbench]] 65.9183673469388%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
