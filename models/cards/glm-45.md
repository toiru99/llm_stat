---
type: Model
title: GLM-4.5
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 355
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 31.8, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 38.3, z: -0.31, r: 45.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.4, z: 0.05, r: 50.8, estimated: false }  # 긴문맥
  instruction: { s: 44.9, z: -0.23, r: 46.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GLM-4.5

Z AI · Open · Large(355B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[gpqa-diamond]] 78.1818%×0.4, [[humanitys-last-exam]] 12.975%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 78.1818%×1.0, [[humanitys-last-exam]] 12.975%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[terminal-bench]] 21.9697%×0.5 |
| 에이전트 | 45.4 | -0.31 | 실측 | [[tau2-bench]] 42.9825%×1.0, [[terminal-bench]] 21.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.8 | +0.05 | 실측 | [[aa-lcr]] 52.6667%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 실측 | [[ifbench]] 44.0816%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
