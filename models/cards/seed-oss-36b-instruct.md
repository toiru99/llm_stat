---
type: Model
title: Seed-OSS-36B-Instruct
creator: ByteDance Seed
license: Open
intelligence_index: None
price_blended_usd_1m: 0.246
output_speed_tps: 35.4690797769437
context_window: 512000
status: past
size_class: Small
params_b: 36.2
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.0, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.35, r: 55.3, estimated: false }  # 긴문맥
  instruction: { s: 41.8, z: -0.36, r: 44.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Seed-OSS-36B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Seed-OSS-36B-Instruct

ByteDance Seed · Open · Small(36.2B) · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.21 · 출력 $0.57 · 혼합 $0.246/1M · 35.4690797769437 t/s · TTFT 5.32126630662776s · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | +-0.0 | 실측 | [[gpqa-diamond]] 72.6263%×0.4, [[humanitys-last-exam]] 9.87025%×0.3 |
| 추론 | 44.8 | -0.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.6263%×1.0, [[humanitys-last-exam]] 9.87025%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[tau2-bench]] 49.4152%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.3 | +0.35 | 실측 | [[aa-lcr]] 61.3333%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 실측 | [[ifbench]] 41.9048%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
