---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 3.81981165137417
price_blended_usd_1m: 0.16
output_speed_tps: 202.243476742114
context_window: 131072
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 56.0, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.04, r: 50.5, estimated: false }  # 추론
  coding: { s: 41.6, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 58.6, z: 0.03, r: 50.4, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **3.81981165137417**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.16/1M · 202.243476742114 t/s · TTFT 1.29931832166595s · 131k ctx` · 가성비 23.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[gpqa-diamond]] 78.1818%×0.4, [[humanitys-last-exam]] 19.6015%×0.3 |
| 추론 | 50.5 | +0.04 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 78.1818%×1.0, [[humanitys-last-exam]] 19.6015%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 34.0278%×1.0, [[terminal-bench]] 23.4848%×0.5 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[gdpval]] 615.3 Elo×1.0, [[tau2-bench]] 65.7895%×1.0, [[tau3-banking]] 12.7835%×1.0, [[terminal-bench]] 23.4848%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.4 | +0.03 | 실측 | [[aa-lcr]] 52%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 68.9796%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
