---
type: Model
title: GPT-5.2 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 68.6807087813505
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.6, z: 0.88, r: 63.2, estimated: false }  # 전문 지식
  reasoning: { s: 48.5, z: 0.64, r: 59.6, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 70.2, z: 0.88, r: 63.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.1, z: 0.44, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.76, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.87, r: 63.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-5.2 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 68.6807087813505 t/s · TTFT 5.81561092413337s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.2 | +0.88 | 실측 | [[gpqa-diamond]] 86.3636363636364%×0.4, [[humanitys-last-exam]] 26.6913809082484%×0.3 |
| 추론 | 59.6 | +0.64 | 실측 | [[critpt]] 7.85714285714285%×1.0, [[gpqa-diamond]] 86.3636363636364%×1.0, [[humanitys-last-exam]] 26.6913809082484%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[terminal-bench]] 43.1818181818182%×0.5 |
| 에이전트 | 63.2 | +0.88 | 실측 | [[tau2-bench]] 74.2690058479532%×1.0, [[terminal-bench]] 43.1818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.7 | +0.44 | 실측 | [[mmmu-pro]] 74.5664739884393%×1.0 |
| 긴문맥 | 61.5 | +0.76 | 실측 | [[aa-lcr]] 70.3333333333333%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 실측 | [[ifbench]] 65.2380952380953%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
