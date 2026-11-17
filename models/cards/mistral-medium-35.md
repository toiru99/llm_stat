---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 4.64508756526957
price_blended_usd_1m: 1.155
output_speed_tps: 145.6915565111617
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.4, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.46, r: 56.9, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.41, r: 56.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.4, z: -0.2, r: 47.0, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 79.6, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **4.64508756526957**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.155/1M · 145.6915565111617 t/s · TTFT 7.1384899887452s · 256k ctx` · 가성비 4.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[gpqa-diamond]] 74.8484848484849%×0.4, [[humanitys-last-exam]] 13.7627432808156%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.8484848484849%×1.0, [[humanitys-last-exam]] 13.7627432808156%×1.0 |
| 코딩 | 56.9 | +0.46 | 실측 | [[scicode]] 40.162037037037%×1.0, [[terminal-bench]] 33.3333333333333%×0.5 |
| 에이전트 | 56.2 | +0.41 | 실측 | [[gdpval]] 768.53%×1.0, [[tau2-bench]] 94.15204678362569%×1.0, [[tau3-banking]] 15.051546391752598%×1.0, [[terminal-bench]] 33.3333333333333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.0 | -0.2 | 실측 | [[mmmu-pro]] 64.8554913294798%×1.0 |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 68.7755102040816%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
