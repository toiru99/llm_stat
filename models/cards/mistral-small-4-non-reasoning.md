---
type: Model
title: Mistral Small 4 (non-reasoning)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: 122.8151738954996
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.69, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 19.7, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.8, r: 37.9, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.94, r: 35.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 42.8, z: -1.46, r: 28.1, estimated: false }  # 멀티모달
  long_context: { s: 32.0, z: -0.63, r: 40.5, estimated: false }  # 긴문맥
  instruction: { s: 29.0, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Small 4 (non-reasoning)

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 122.8151738954996 t/s · TTFT 1.6083825694714327s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.69 | 실측 | [[gpqa-diamond]] 57.07070707070711%×0.4, [[humanitys-last-exam]] 3.79981464318814%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 57.07070707070711%×1.0, [[humanitys-last-exam]] 3.79981464318814%×1.0 |
| 코딩 | 37.9 | -0.8 | 실측 | [[terminal-bench]] 10.6060606060606%×0.5 |
| 에이전트 | 35.8 | -0.94 | 실측 | [[tau2-bench]] 18.4210526315789%×1.0, [[terminal-bench]] 10.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 28.1 | -1.46 | 실측 | [[mmmu-pro]] 46.4739884393064%×1.0 |
| 긴문맥 | 40.5 | -0.63 | 실측 | [[aa-lcr]] 28.3333333333333%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 32.7891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
