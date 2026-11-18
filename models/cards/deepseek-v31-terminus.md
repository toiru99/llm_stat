---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.6992
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.8, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.01, r: 49.8, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 43.4, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.73, r: 60.9, estimated: false }  # 긴문맥
  instruction: { s: 63.0, z: 0.38, r: 55.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $1.635 · 출력 $2.75 · 혼합 $1.6992/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[gpqa-diamond]] 79.1919191919192%×0.4, [[humanitys-last-exam]] 16.3577386468953%×0.3 |
| 추론 | 49.8 | -0.01 | 실측 | [[critpt]] 1.71428571428571%×1.0, [[gpqa-diamond]] 79.1919191919192%×1.0, [[humanitys-last-exam]] 16.3577386468953%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[scicode]] 37.962962962963%×1.0, [[terminal-bench]] 30.303030303030297%×0.5 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[gdpval]] 717.53%×1.0, [[tau2-bench]] 37.1345029239766%×1.0, [[tau3-banking]] 21.0309278350515%×1.0, [[terminal-bench]] 30.303030303030297%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.9 | +0.73 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 55.8 | +0.38 | 실측 | [[ifbench]] 57.0068027210884%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
