---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: 45.0
price_blended_usd_1m: 0.1765
output_speed_tps: 50.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 70.9, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 65.8, z: 1.57, r: 73.6, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.28, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 66.9, z: 1.16, r: 67.4, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.57, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 50.0 t/s · TTFT 1.62s · 1M ctx` · 가성비 255.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 73.6 | +1.57 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 69.3 | +1.28 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 67.4 | +1.16 | 실측 | [[apex-agents]] 24.0%×1.0, [[gdpval]] 40.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 73.5 | +1.57 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
