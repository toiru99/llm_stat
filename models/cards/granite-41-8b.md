---
type: Model
title: Granite 4.1 8B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 23.8, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.2, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 14.0, z: -1.17, r: 32.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.0, z: -1.31, r: 30.4, estimated: false }  # 긴문맥
  instruction: { s: 37.2, z: -0.55, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Granite 4.1 8B

IBM · Open · Small(8B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 43.3333%×0.4, [[humanitys-last-exam]] 3.79981%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 43.3333%×1.0, [[humanitys-last-exam]] 3.79981%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 32.5 | -1.17 | 실측 | [[tau2-bench]] 27.7778%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.31 | 실측 | [[aa-lcr]] 13.3333%×1.0 |
| 지시 따르기 | 41.8 | -0.55 | 실측 | [[ifbench]] 38.6395%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
