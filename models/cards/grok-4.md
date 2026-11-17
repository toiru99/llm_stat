---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.2
output_speed_tps: 68.93935168650559
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.5, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.6, r: 59.1, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.7, z: 0.07, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 76.7, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 58.4, z: 0.2, r: 52.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · 68.93935168650559 t/s · TTFT 17.992804350270806s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[gpqa-diamond]] 87.6767676767677%×0.4, [[humanitys-last-exam]] 26.6913809082484%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 87.6767676767677%×1.0, [[humanitys-last-exam]] 26.6913809082484%×1.0 |
| 코딩 | 59.1 | +0.6 | 실측 | [[terminal-bench]] 37.878787878787904%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[tau2-bench]] 74.85380117%×1.0, [[terminal-bench]] 37.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.07 | 실측 | [[mmmu-pro]] 68.8439306358381%×1.0 |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 52.9 | +0.2 | 실측 | [[ifbench]] 53.673469387755105%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
