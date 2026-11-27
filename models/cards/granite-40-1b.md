---
type: Model
title: Granite 4.0 1B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 1.6
is_reasoning: false
radar:
  knowledge: { s: 14.3, z: -1.58, r: 26.3, estimated: false }  # 전문 지식
  reasoning: { s: 8.8, z: -1.31, r: 30.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 11.5, z: -1.26, r: 31.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.8, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 11.8, z: -1.6, r: 25.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Granite 4.0 1B

IBM · Open · Tiny(1.6B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.3 | -1.58 | 실측 | [[gpqa-diamond]] 28.0808%×0.4, [[humanitys-last-exam]] 4.81928%×0.3 |
| 추론 | 30.3 | -1.31 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 28.0808%×1.0, [[humanitys-last-exam]] 4.81928%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 31.2 | -1.26 | 실측 | [[tau2-bench]] 22.807%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 6%×1.0 |
| 지시 따르기 | 25.9 | -1.6 | 실측 | [[ifbench]] 20.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
