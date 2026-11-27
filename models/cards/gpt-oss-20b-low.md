---
type: Model
title: gpt-oss-20b (low)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.093
output_speed_tps: 154.590741146013
context_window: 131072
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.65, r: 40.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.0, z: -0.7, r: 39.6, estimated: false }  # 긴문맥
  instruction: { s: 64.2, z: 0.57, r: 58.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# gpt-oss-20b (low)

OpenAI · Open · Small(21B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.093/1M · 154.590741146013 t/s · TTFT 1.15314779891754s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[gpqa-diamond]] 61.1111%×0.4, [[humanitys-last-exam]] 5.28267%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.1111%×1.0, [[humanitys-last-exam]] 5.28267%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 40.3 | -0.65 | 실측 | [[tau2-bench]] 50.2924%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.6 | -0.7 | 실측 | [[aa-lcr]] 31%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 실측 | [[ifbench]] 57.8231%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
