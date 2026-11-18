---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.723
output_speed_tps: 56.575844084780606
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.6, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.6, z: 0.99, r: 64.8, estimated: false }  # 추론
  coding: { s: 67.4, z: 0.93, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 0.71, r: 60.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 71.6, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 56.575844084780606 t/s · TTFT 6.23111339845665s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[gpqa-diamond]] 89.5959595959596%×0.4, [[humanitys-last-exam]] 35.032437442075995%×0.3 |
| 추론 | 64.8 | +0.99 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 89.5959595959596%×1.0, [[humanitys-last-exam]] 35.032437442075995%×1.0 |
| 코딩 | 64.0 | +0.93 | 실측 | [[scicode]] 47.8009259259259%×1.0, [[terminal-bench]] 44.6969696969697%×0.5 |
| 에이전트 | 60.7 | +0.71 | 실측 | [[gdpval]] 1045.88%×1.0, [[tau2-bench]] 90.0584795321637%×1.0, [[tau3-banking]] 20.2061855670103%×1.0, [[terminal-bench]] 44.6969696969697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 63.1292517006803%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
