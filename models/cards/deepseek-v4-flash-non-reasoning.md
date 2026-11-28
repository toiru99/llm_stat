---
type: Model
title: DeepSeek V4 Flash (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0508
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: false
radar:
  knowledge: { s: 44.8, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 73.5, z: 0.93, r: 63.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.33, r: 45.1, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.05, r: 49.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# DeepSeek V4 Flash (non-reasoning)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.0938 · 출력 $0.1876 · 혼합 $0.0508/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 71.6162%×0.4, [[humanitys-last-exam]] 7.78499%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 71.6162%×1.0, [[humanitys-last-exam]] 7.78499%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 34.0909%×0.5 |
| 에이전트 | 63.9 | +0.93 | 실측 | [[tau2-bench]] 94.4444%×1.0, [[terminal-bench]] 34.0909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.1 | -0.33 | 실측 | [[aa-lcr]] 41.6667%×1.0 |
| 지시 따르기 | 49.3 | -0.05 | 실측 | [[ifbench]] 47.2109%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
