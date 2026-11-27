---
type: Model
title: Qwen3 Max Thinking (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.6, z: 0.23, r: 53.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.4, z: -0.19, r: 47.2, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.29, r: 54.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 58.5, z: 0.34, r: 55.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max Thinking (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 Max Thinking (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.5 | +0.23 | 실측 | [[gpqa-diamond]] 77.5758%×0.4, [[humanitys-last-exam]] 12.6506%×0.3 |
| 추론 | 47.2 | -0.19 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 77.5758%×1.0, [[humanitys-last-exam]] 12.6506%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 54.3 | +0.29 | 실측 | [[tau2-bench]] 83.6257%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 62%×1.0 |
| 지시 따르기 | 55.1 | +0.34 | 실측 | [[ifbench]] 53.8095%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
